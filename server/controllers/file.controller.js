
const { PdfReader } = require('pdfreader');

// Initialise the reader
//const reader = new PdfReader();
const fs = require('fs');
var pdfParser = require('pdf-parser');



// var rows = {}; // indexed by y-position

// function printRows() {
//   Object.keys(rows) // => array of y-positions (type: float)
//     .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
//     .forEach((y) => console.log((rows[y] || []).join('')));
// }

module.exports = {
    uploadFile: async (file) => {

        //let pdfText = "";
        // new PdfReader().parseFileItems("/Users/urielchechique/Desktop/file/server/controllers/cv2.pdf", function(err, item){
        //     if (item && item.text) {
        //         //printRows();
        //         //console.log('PAGE:', item.R.TS);
        //         pdfText += item.text + " ";
        //         console.log("--------------------");
        //         console.log(pdfText);
        //     }
        // });
        // console.log(pdfText);

        var PDF_PATH = '/Users/urielchechique/Desktop/file/server/controllers/cv2.pdf';

        pdfParser.pdf2json(PDF_PATH, function (error, pdf) {
            if(error != null){
                console.log(error);
            }else{
                let i = 0;
                let text = '';
                while(i < pdf.pages[0].texts.length) {
                    // if(pdf.pages[0].texts[i].text == "email") {
                    //     console.log(pdf.pages[0].texts[i+1].text)
                    // }
                    console.log(pdf.pages[0].texts[i].text)
                    text += pdf.pages[0].texts[i].text
                    i++;
                }
                //console.log(text)
            }
        });

    }
}




