/** @format */

const express = require('express');

const router = express.Router();

let currentPowerCache = 0;
let anualPowerCache = 0;

router.post(`/publishCurrentPower`, async (req, res) => {
	const currentPower = req.body.currentPower;

	if (isNaN(currentPower)) {
		res.status(400).send('currentPower must be a number');
	} else {
		currentPowerCache = currentPower;
		res.status(200).send('Successfully updated current power');
	}
});

router.post(`/publishAnualPower`, async (req, res) => {
	const anualPower = req.body.anualPower;

	if (isNaN(anualPower)) {
		res.status(400).send('anualPower must be a number');
	} else {
		anualPowerCache = anualPower;
		res.status(200).send('Successfully updated anual power');
	}
});

router.get('/checkCurrentPower', async (req, res) => {
	res.status(200).send({ currentPower: currentPowerCache });
});
router.get('/checkAnualPower', async (req, res) => {
	res.status(200).send({ anualPower: anualPowerCache });
});

module.exports = router;
