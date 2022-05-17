const axios = require('axios');
const Pushes = require('./models/Pushes');

function pushAllAlertsHttp(alert) {
    axios.post('http://localhost:8081/alerts/allAlerts', alert)
        .then(res => {
            switch (res.status) {
                case 200:
                    console.log('Alert recived and sent successfuly!');
            };
        })
        .catch(error => {
            console.log(error);
        })
}

module.exports = { pushAllAlertsHttp };
