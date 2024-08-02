function trackSearch() {
        
    var query = (new URLSearchParams(window.location.search)).get('search');
    // ruleid: solution-4
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}


function getSearch()
{
    var query = (new URLSearchParams(window.location.search)).get('search');
    trackSearch1(query);
    trackSearch2(query);
    trackSearch3(query);
}

function sanitize(x) { if (x.isUnsafe()) throw "BAD"}

var query = (new URLSearchParams(window.location.search)).get('search');
 
sanitize(query);
//ok: solution-4
document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');

function trackSearch1(query) {
        
    var a = "1";
    
    query = new Sanitizer().sanitizeToString(query);
    //ok: solution-4
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}

function trackSearch2(query) {
        
    var a = "1";
    // ruleid: solution-4
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}


function trackSearch3(query) {     
    
    var a = "1";
    
    query = new Sanitizer().sanitizeToString(query);
    // ok: solution-4
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}

function trackSearch4(query) {
    
    var a = "1";
    CustomSanitize(query)
    // ruleid: solution-4
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}

function trackSearch5(query) {
    
    var a = "1";
    query = CustomSanitize(query)
    // ok: solution-4
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}


function getSearch2()
{
    var query = pullInput();
    trackSearch4(query);
    
    trackSearch5(query);
}

function pullInput()
{
    var query = (new URLSearchParams(window.location.href)).get('search');
    return query;
}

function getSearch3(potentiallyDangerous)
{
    var query = potentiallyDangerous.value1;
    
    // ruleid: solution-4
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
    
    potentiallyDangerous.selfClean();

    query = potentiallyDangerous.value1;

    // ok: solution-4
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}
