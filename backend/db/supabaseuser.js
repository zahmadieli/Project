const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://uqegiiwznkrnkgwzmnoo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZWdpaXd6bmtybmtnd3ptbm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1OTk3OTMsImV4cCI6MjA2MzE3NTc5M30.-XC1ivuJ17SUMeSjVXHHiO1MybFx2-SjiNqgQg3XeTA';

const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
