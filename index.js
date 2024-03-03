// Description: this file is the entry point of the application
// This is to just go to SEC and download the files
// URL: https://www.sec.gov/data/foiadocsfailsdatahtm

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const {sleep} = require("./commonFunctions");

//devlogin = require('./devlogin');


// File Drop Dir
const download_path = path.resolve(__dirname, 'downloads');
// Quickly opening SEC FTD Data


const runVersion = "Dev"


async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--ignore-certificate-errors']
    });

    const page = await browser.newPage();
    /*
    //Adjusting download location of files
    await page.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        userDataDir: './',
        downloadPath: download_path,
    });

     */


    //console.table(symList)

    //await keypress("Completed Login. Press any key to continue........")
    // Await loggin Then


    await page.goto('https://www.sec.gov/data/foiadocsfailsdatahtm').then((page) => {
        console.log(page.json());


        let i = 1;
        while (i === 1) {

        }
    });


    await sleep(2000);


}

main();