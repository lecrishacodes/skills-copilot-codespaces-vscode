// Create web server to handle comments
// =============================================================

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle GET request for comments
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.get('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_get);