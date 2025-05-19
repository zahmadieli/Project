const express = require('express');
const router = express.Router();
const supabase = require('../db/supabaseuser');


router.get('/bookmarks', async (req, res) => {
  const { data, error } = await supabase.from('bookmarks').select('*');

  if (error) {
    console.error("Error retrieving bookmarks:", error);
    return res.status(500).json({ error });
  }

  res.json(data);
});


router.post('/bookmark', async (req, res) => {
  const { title, company } = req.body;
  console.log("POST /bookmark received:", title, company);

  if (!title || !company) {
    console.log("Missing title or company");
    return res.status(400).json({ error: "Missing title or company" });
  }

  const { data, error } = await supabase
    .from('bookmarks')
    .insert([{ title, company }])
    .select();
     

  if (error) {
    console.error("Supabase insert error:", error);
    return res.status(500).json({ error });
  }

  console.log("Inserted successfully:", data);
  res.json(data);
});
module.exports = router;
