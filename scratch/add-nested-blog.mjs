async function addNestedDraft() { 
  try { 
    const loginRes = await fetch('http://localhost:3000/api/auth/login', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ email: 'siraj-portfolio@admin.com', password: 'Siraj@2026Pass' }) 
    }); 
    const loginData = await loginRes.json(); 
    if (!loginData.success) {
      console.log('Login failed:', loginData);
      return;
    }
    const token = loginData.data.token; 
    
    const draft = { 
      title: 'Testing Nested Sections', 
      slug: 'testing-nested-sections-' + Date.now(), 
      excerpt: 'This post is to test the new nested sections array feature.', 
      thumbnail: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      tags: ['Test'], 
      status: 'draft',
      sections: [
        {
          title: 'Introduction',
          paragraphs: [
            'This is the first paragraph of the introduction.',
            'This is the second paragraph of the introduction.'
          ]
        },
        {
          title: 'Deep Dive',
          paragraphs: [
            'Here we go deep into the topic.',
            'Another deep point.'
          ]
        }
      ]
    }; 
    
    const post = await fetch('http://localhost:3000/api/blogs', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, 
      body: JSON.stringify(draft) 
    }); 
    console.log('Result:', await post.json()); 
  } catch(e) { 
    console.error(e) 
  } 
} 

addNestedDraft();
