const express = require('express');
const router = express.Router();
const supabase = require('../db/supabaseuser');

router.get('/bookmarks', async (req, res) => {
  const { data, error } = await supabase.from('bookmarks').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

router.post('/bookmark', async (req, res) => {
  const { title, company } = req.body;
  const { data, error } = await supabase.from('bookmarks').insert([{ title, company }]);
  if (error) return res.status(500).json({ error });
  res.json(data);
});

module.exports = router;
