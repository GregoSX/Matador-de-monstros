module.exports = app => {
    const get = (req, res) => {
        const defaultStat = {
            users: 0,
            categories: 0,
            articles: 0
        };
        const stat = {
            createdAt: new Date()
        };
        
        app.db('users')
            .count('id')
            .whereNull('deletedAt')
            .then((result) => { 
                stat.users = result[0].count || defaultStat.users;
                return app.db('categories').count('id');
            }).then((result) => {
                stat.categories = result[0].count || defaultStat.categories;
                return app.db('articles').count('id');
            }).then((result) => {
                stat.articles = result[0].count || defaultStat.articles;
                res.json(stat);
            }).catch(err => {
                res.status(500).send(err);
            });
      }

    return { get }
}