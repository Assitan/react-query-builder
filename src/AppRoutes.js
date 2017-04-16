// We import our op schema
import Query from './models';

// db.users.findOne({email: 'johndoe@gmail.com'})
// db.links.find({favourites: 100}, {tags: 0}) //exclut les tags dans l’affichage
// db.links.find({favourites: 100}, {tags: 1}) //inclut les tags dans l’affichage
// db.links.find({favourites: {$gt: 50}}, {title:1, favourites: 1, _id: 0})
// db.users.find({$or:[{'name.first':"John"},{'name.last':"Wilson"}]})
// db.users.find({$and:[{'name.first':"John"},{'name.last':"Wilson"}]})
// db.links.find({title: {$regex: /tuts\+$/, $ne: "Mobiletuts+"}}, {title: 1})
// db.users.find({email: {$exists: true}}, {name:1, _id:0})
// db.users.find({'name.first': {$in: ['John','Jane']}})


const getOneQuery = (req, res) => {
    const { field } = req.params;
    Query.findOne(field, (err, data) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        // data sent as json
        return res.status(200).send(data);
      }
    });
}

const getMixedQuery = (req, res) => {
    const { field } = req.params;
    Query.find(field, (err, data) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        // data sent as json
        return res.status(200).json(data);
      }
    });
}

// We export our functions to be used in the server routes
export { getOneQuery, getMixedQuery };
