'use strict';

(function(module){
  function Article(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  Article.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
    Article.all = rows.map(data => new Article(data))
  };

  Article.fetchAll = callback => {
    $.get('/articles')
    .then(
      results => {
        Article.loadAll(results);
        callback();
      }
    )
  };

  Article.numWordsAll = () => {
    return Article.all.map(wordTotal => {
      return wordTotal.body.split(' ').length
    }).reduce((wordTotal, num) => {
      return wordTotal + num;
    },0)
  };

  Article.allAuthors = () => {
    return Article.all.map(authorNames => {
      return authorNames.author;
    }).reduce((authorNames, currentAuthor) => {
      if(!authorNames.includes(currentAuthor)){
        authorNames.push(currentAuthor);
      }
      return authorNames;
    },[]);
  };

  Article.numWordsByAuthor = () => {
    return Article.allAuthors().map(authorName => {
      let wordCount = Article.all.filter((article) => {
        return article.author === authorName;
      }).map(oneArticle => {
        return oneArticle.body.split(' ').length;
      }).reduce((runningTotal, oneValueInTheArray) => {
        return runningTotal + oneValueInTheArray;
      },0);
      return {name: authorName, wordCount: wordCount}
    })
  };

  Article.truncateTable = callback => {
    $.ajax({
      url: '/articles',
      method: 'DELETE',
    })
    .then(console.log)


    .then(callback);
  };

  Article.prototype.insertRecord = function(callback) {
    $.post('/articles', {author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title})
    .then(console.log)
    .then(callback);
  };

  Article.prototype.deleteRecord = function(callback) {
    $.ajax({
      url: `/articles/${this.article_id}`,
      method: 'DELETE'
    })
    .then(console.log)
    .then(callback);
  };

  Article.prototype.updateRecord = function(callback) {
    $.ajax({
      url: `/articles/${this.article_id}`,
      method: 'PUT',
      data: {
        author: this.author,
        authorUrl: this.authorUrl,
        body: this.body,
        category: this.category,
        publishedOn: this.publishedOn,
        title: this.title,
        author_id: this.author_id
      }
    })
    .then(console.log)
    .then(callback);
  };

  module.Article = Article;
}(window));
