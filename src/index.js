/**
 * A simple web-app to assist with pending
 */

import './css/style.css'
import { elements, readOld } from './js/UIcontroller'
import { parsePending } from './js/parser'

// Setup event handlers
 {
     elements.readOldButton.addEventListener('click', processText)
 }

function processText() {
    // Get text from input
    let oldText = readOld();
    
    // Parse text
    parsePending(oldText);
}