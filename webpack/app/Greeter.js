//const config = require('./config.json');
// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.greeText
//     return greet
// }

import React , {Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'
class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {config.greeText}
            </div>
        )   
    }
}
export default Greeter