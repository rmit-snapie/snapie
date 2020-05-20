const {db, admin} = require('../environments/admin');

exports.signIn = (req, res) => {
    const user = {
        username: req.body.username,
    };

    db
        .collection('users')
        .doc(user.username)
        .get()
        .then(async doc => {
            if (doc.exists) {
                return res.status(200).json({error: 'username is already taken'})
            } else {
                 await db
                    .collection('users')
                    .doc(user.username)
                    .set(user);
                 return res.status(200).json({username: user.username});
            }
        })
        .catch(err => {
            console.log(err);
            return res.json(400).json({error: err})
        })
};

exports.updateUserProgress = (req, res) => {
    const username = req.body.username;
    const progress = {
        stage: req.body.stage,
        level: req.body.level,
        test: req.body.test,
    };

    db
        .collection('users')
        .doc(username)
        .get()
        .then(async doc => {
            if (doc.exists) {
                await doc.ref.update(progress);
                return res.status(200).json({message: 'progress updated'});
            } else {
                return res.status(200).json({error: 'user does not exist'});
            }
        })
        .catch(err => {
            console.log(err);
            return res.json(400).json({error: err});
        })
};

