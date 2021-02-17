import express from 'express';
import controller from '../controllers/sample';

const router = express.Router();

router.get('/check', controller.sampleHealthCheck);

export = router;
