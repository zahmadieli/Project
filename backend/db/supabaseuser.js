const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bsavohwgvaoexodeugxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzYXZvaHdndmFvZXhvZGV1Z3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MTM5OTMsImV4cCI6MjA2MzE4OTk5M30.ddts1HzjDSlnveJjFyWe6iWAuSH21f1XZQRpWBVSyV8'
const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
