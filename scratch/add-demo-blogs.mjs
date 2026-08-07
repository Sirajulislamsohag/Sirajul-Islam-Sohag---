async function addDrafts() { 
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
    
    const draft1 = { 
      title: 'The Future of Google Ads: AI and Automation', 
      slug: 'future-of-google-ads-' + Date.now(), 
      excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing Google Ads campaigns, driving lower CPAs and higher ROAS for modern e-commerce brands.', 
      content: '## The Era of AI in Advertising\n\nArtificial Intelligence is no longer just a buzzword; it is the core engine behind modern Google Ads. From Smart Bidding strategies like Target ROAS to fully automated Performance Max (PMax) campaigns, Google is relying heavily on machine learning to serve the right ad, to the right person, at exactly the right time.\n\n### What does this mean for advertisers?\n\n1. **Less manual bidding:** The days of adjusting CPCs by a few cents every morning are gone.\n2. **More focus on creatives:** With the algorithm handling the math, advertisers must pivot to providing high-quality images, videos, and ad copy.\n3. **Broader targeting:** Exact match keywords are taking a backseat to broad match paired with Smart Bidding.\n\nAre you ready to adapt to the new age of digital marketing?', 
      tags: ['Google Ads', 'AI', 'Performance Max'], 
      status: 'draft' 
    }; 
    
    const draft2 = { 
      title: '5 Common Mistakes in Google Analytics 4 (GA4) Setup', 
      slug: 'ga4-common-mistakes-' + Date.now(), 
      excerpt: 'Transitioning to GA4 has been tough for many businesses. Here are the 5 most common tracking mistakes I see when auditing new clients, and how to fix them.', 
      content: '## The GA4 Learning Curve\n\nGoogle Analytics 4 (GA4) introduced a completely new event-based data model. Unfortunately, many businesses simply relied on the auto-migration tool, leaving their data messy and inaccurate.\n\n### 1. Not Setting Up Internal Traffic Filters\nIf you and your team visit your website 50 times a day, your engagement metrics will be heavily skewed. Always filter out your office IP address.\n\n### 2. Ignoring Cross-Domain Tracking\nIf your user starts on `yourwebsite.com` and checks out on `shop.yourwebsite.com`, failing to set up cross-domain tracking will result in broken user journeys and lost attribution.\n\n### 3. Relying Solely on Auto-Collected Events\nWhile GA4 collects page views and scrolls automatically, you must set up custom events for your most valuable actions (e.g., adding to cart, submitting a lead form, clicking a specific promotional banner).\n\nIf your data doesn\'t make sense, it\'s time for an audit!', 
      tags: ['Analytics', 'GA4', 'Tracking'], 
      status: 'draft' 
    }; 
    
    const post1 = await fetch('http://localhost:3000/api/blogs', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, 
      body: JSON.stringify(draft1) 
    }); 
    console.log('Draft 1:', await post1.json()); 
    
    const post2 = await fetch('http://localhost:3000/api/blogs', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, 
      body: JSON.stringify(draft2) 
    }); 
    console.log('Draft 2:', await post2.json()); 
  } catch(e) { 
    console.error(e) 
  } 
} 

addDrafts();
