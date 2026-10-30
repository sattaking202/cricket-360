CRICKET 360 — COMPLETE WEBSITE PACKAGE
=======================================

IS ZIP MEIN KYA HAI
- Premium responsive website (Hindi/English audience ke liye English UI)
- Live/current match score API integration (CricketData)
- Upcoming fixtures, completed match cards
- Cricket news RSS headlines with original publisher links
- 30-minute scheduled score cache
- 5-minute website refresh from cache (extra API hit nahi)
- 15-minute news cache
- Privacy, Terms, Contact pages
- SEO metadata, social sharing, security headers
- API key server-side only; browser/HTML mein nahi

IMPORTANT — AAPKI API KEY
Aapne Netlify Environment Variables mein CRICKETDATA_API_KEY save ki hai.
Usi Netlify site par variable available hona chahiye aur Functions scope include hona chahiye.
Key ko ZIP, HTML, screenshot ya chat mein kabhi paste/share na karein.
Variable add/update karne ke baad fresh deploy zaroor karein.

DEPLOYMENT — IMPORTANT
Yeh ZIP Netlify Drop par sirf static HTML ki tarah upload karne ke liye nahi hai.
Isme Netlify Functions aur Scheduled Function hain. Inko deploy karne ke liye Netlify ko project ke root folder, netlify.toml, package.json aur netlify/functions folder ke saath build/deploy karna hoga.
Agar aapka current site Netlify Drop manual upload se bana hai, to ZIP ko direct Drop par upload karne se backend functions activate nahi honge.
Recommended: Netlify project ko Git repository se connect karke deploy karein. iPhone-only workflow mein GitHub app/browser se repository banana aur ZIP contents upload karna possible hai, lekin multi-file upload thoda cumbersome ho sakta hai.
Aapka current live site tab tak change nahi hoga jab tak aap naya deploy publish nahi karte.

DEPLOY KE BAAD CHECK
1. Netlify dashboard > Functions: refresh-cricket-cache, matches, news visible hone chahiye.
2. Scheduled function sirf published deploy par schedule ke mutabik chalega.
3. Functions tab se scheduled function ka Run now use karke pehla cache populate karein.
4. Website par /api/matches aur /api/news test karein.
5. Netlify Function logs mein errors check karein.

API USAGE
CricketData Free plan ko 100 hits/day bataya gaya hai. Scheduled refresh har 30 min (48 potential scheduled hits/day) par hai. Website ka 5-min refresh backend cache se data padhta hai, provider API ko call nahi karta. Manual website refresh bhi cached data padhta hai.
CricketData ka free data delayed ho sakta hai; exact real-time guarantee nahi hai. Schedule/API provider availability ke hisab se updates late ho sakte hain.

NEWS
News feed Google News RSS se headlines laata hai aur publisher/original story link karta hai. Feed ki availability third-party par depend karti hai. Headlines ko full article ke roop mein copy nahi kiya gaya.

FEATURES NOT INCLUDED YET
- Admin login/dashboard
- Database-backed editorial CMS
- IPL points table and player statistics (alag API endpoints/data validation aur UI integration required)
- Push notifications
- User accounts/comments
- Actual social media accounts
In features ko add karne se pehle owner email, social links, database choice aur access rules final karne honge.

OWNER TODO BEFORE PUBLIC LAUNCH
- Contact page mein official email add karein.
- Social profile URLs add karein after creating/confirming accounts.
- Privacy/Terms ko actual business model ke hisab se review karein.
- CricketData plan terms and branding/attribution requirements check karein.
- Website ko production deployment ke baad test karein.
