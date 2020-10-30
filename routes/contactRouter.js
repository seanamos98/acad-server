const express = require('express');


// desc contact page
function routes(Contact) {
    const ContactRouter = express.Router();
    ContactRouter.route('/contacts').post((req, res) => {
        const contact = new Contact(req.body);
        contact.save();
        return res.status(201).json(contact)

    })
    return ContactRouter
}
module.exports = routes;

// .post( (req, res) => {
// console.log('posting')
//     const contact = new Contact({
//     firstName:req.body.firstName,
//     lastName:req.body.lastName,
//     country:req.body.country,
//     message:req.body.message
// }),
// try {
//     const savedContact = await contact.save();
//     res.json(savedContact)
// } catch (err) {
//     res.json({message: err})
// }
// })

// module.exports = router