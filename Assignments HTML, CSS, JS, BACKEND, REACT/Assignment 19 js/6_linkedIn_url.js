function linkedIn_url_validator(url){
    let re = /^https:\/\/www\.linkedin\.com\/in\/(.*)(\w|\d|\/)$/gi;
    let id = url.substr(28);

    (id.length >= 5 && id.length <= 30) ? (() =>{
        
        let result = re.test(url);
        if(result == true){
               console.log(`\n${url}\n Is a valid LinkedIn profile URL`);
        }
        else{
               console.log(`\n${url}\n Is a Invalid LinkedIn profile URL`);
            }
        })() : console.log(`\n${url}\n Is a Invalid LinkedIn profile URL`);
     
}


linkedIn_url_validator('https://www.linkedin.com/in/williamhgates/');

linkedIn_url_validator('https://www.linkedin.com/in/shaikh-sohel-8ba7a9110/');

linkedIn_url_validator('https://www.linkedin.com/in/shaikh-sohel-8ba7a91106516546513168651/');
