// Description: this file is the entry point of the application
// This is to just go to SEC and download the files
// URL: https://www.sec.gov/data/foiadocsfailsdatahtm

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');


// File Drop Dir
const download_path = path.resolve(__dirname, 'downloads');
// Quickly opening SEC FTD Data

async function main() {
    const browser = await puppeteer.launch({headless: false,
        args: [ '--ignore-certificate-errors' ]
    });

    const page = await browser.newPage();
    await page._client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        userDataDir: './',
        downloadPath: download_path,
    });


    //console.table(symList)
    const runVersion = "Dev"
    if (runVersion === "Dev") {
        console.log("Starting Dev Login...")

        await devLogin(page, runVersion, credentials)
        await sleep(2000);
        //await keypress("Completed Login. Press any key to continue........")
        // Await loggin Then


        for (let i = 1; i < symList.length; i++) {
            UrlCombined = UrlBase + symList[i] + UrlExtension;
            console.log("#", i, " Running ", symList[i], " @ " + nowTimeAsString())
            const response = await holdingsDownload(page, UrlCombined)
            await sleep(3000);
            if (response === true) {
                console.log("W Downloaded Data Complete @ " + nowTimeAsString())
                const updateQuery = "UPDATE public.figi_sym_meta SET is_etf_queryable=TRUE, etf_holdings_last_updated_at = '" + nowTimeAsString() + "'   WHERE figi = '" + figiList[i] + "';"

                client.query(updateQuery, (err, res) => {
                    if (err) {
                        // console.error(err);
                    } else if (res) {
                        console.log('Successfully marked : ', symList[i], ' as alive!')
                    }
                });
            } else if (response === false) {
                console.log("Dead SYM " + nowTimeAsString())
                const updateQuery = "UPDATE public.figi_sym_meta SET is_etf_queryable=FALSE, etf_holdings_last_updated_at = '" + nowTimeAsString() + "'   WHERE figi = '" + figiList[i] + "';"
                client.query(updateQuery, (err, res) => {
                    if (err) {
                        // console.error(err);
                    } else if (res) {
                        console.log('Successfully Updated : ', symList[i], ' to DEAD!')
                    }
                });


            }
            console.log("")
            console.log("")

            // console.log(response)
        }


    } else {
        await devLogin(page, runVersion, credentials)
        await sleep(5000);
    }

}

main();