const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const Session = require('./controllers/SessionController')
const router = express.Router();

router.post('/sessions', Session.create)

router.get('/', OngController.root)
router.get('/ongs', OngController.index)
router.post('/ongs', OngController.create)

router.get('/incidents', IncidentController.index)
router.post('/incidents', IncidentController.create)
router.delete('/incidents/:id', IncidentController.delete)
router.get('/incidentlist', IncidentController.list)

module.exports = router;