import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import CpToK from './data/lignes_fromCPtoK.json'
import KToCp from './data/lignes_fromKtoCP.json'
import Switch from "./Switch";

function diffFromNow(myHour) {
    var m = parseInt(myHour.replace(":", ""));
    var d = new Date();
    var n = 100 * d.getHours() + d.getMinutes();
    return m - n;
}

function getMinNumLigne(lines) {
    let numTrainMin = 0;
    for (let lineID = 0; lineID < lines.length; lineID++) {
        if ((lines[lineID][20] != null) && (diffFromNow(lines[lineID][20]) > 0)) {
            if (lineID > 1) {
                numTrainMin = lineID - 1;
            } else {
                numTrainMin = lineID;
            }
            break;
        }
    }
    return numTrainMin;
}

function Horaire(props) {
    return (
        <td className="tdCssClass">
            <div id={props.cfIndex} className={props.cfClignote} style={props.cfStyle}>
                <span id={props.haIndex} className="nomGare horaire" style={props.haStyle}>{props.haValue}</span>
            </div>
        </td>
    )
}

function TitreGare(props) {
    return (
        <th id={props.gareId} className={props.titreGareCssClass}>{props.titreGare}</th>
    )
}

function BandeInfo(props) {
    return (
        <div id="band_up" className="divInfo">
            <div id="info">
                <span className="spanInfo">
                    <span>{props.message}</span> - <span>{props.now}</span>
                </span>
            </div >
        </div >
    )
}

function Train(props) {
    return (
        <div>
            <div id={props.id}
                style={props.style}
                className="train">
            </div>
            <div id={props.idNumTrain}
                className="numTrain"
                title="N° du train"
                style={props.numTrainCssStyle}>
                {props.numTrain}
            </div>
        </div>
    )
}

class TrainLine extends React.Component {

    // componentDidMount() {
    //     setInterval(() => window.location.reload(), 5000);
    // }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    constructor(props) {
        super(props);
        this.state = {
            listGare: ["KÉNITRA", "SALÉ TABRIQUET", "SALÉ VILLE", "RABAT VILLE",
                "RABAT AGDAL", "TEMARA", "SKHIRATE", "BOUZNIKA",
                "MOHAMMEDIA", "AIN SEBAA", "CASA PORT"],
            isFromCP: true,
            data: KToCp,
        };
    }

    handleChange(event) {
        console.log("handleChange passed !!")
        if (this.state.isFromCP) {
            this.setState({
                listGare: this.state.listGare.reverse(),
                isFromCP: !this.state.isFromCP,
                data: CpToK,
            })
        } else {
            this.setState({
                listGare: this.state.listGare.reverse(),
                isFromCP: !this.state.isFromCP,
                data: KToCp,
            })
        }
    }

    renderTrainLine() {
        let body = [];

        let th = [];
        for (let i = 0; i < 11; i++) {
            let cssClass = "titreGare titreGareOdd";
            if (i % 2 === 0) cssClass = "titreGare titreGareEven";
            th.push(this.renderTitreGare(i, "th" + i, cssClass, this.state.listGare[i]));
        }
        body.push(<thead key={2019}><tr key={2018}>{th}</tr></thead>);

        let line = [];
        let mycfStyle = {
            backgroundColor: "gray",
        }
        let myHaStyle = {}

        let numTrainMin = getMinNumLigne(this.state.data.lines);

        for (let j = numTrainMin; j < this.state.data.lines.length; j++) {
            let tr = [];
            for (let i = 0; i < 11; i++) {
                let indiceHoraire = i == 0 ? 1 : 2 * i;
                let horaireArriveeGare = this.state.data.lines[j][indiceHoraire];
                let horaireDepartGare = horaireArriveeGare;
                if ((i < 10) && (i > 0)) {
                    horaireDepartGare = this.state.data.lines[j][indiceHoraire + 1];
                }
                let mycfCssClass = "circle_front ";

                if( (horaireDepartGare != null) && (horaireArriveeGare == null) ){
                    // Gare de Depart
                    if (diffFromNow(horaireDepartGare) < 0) {
                        // Le train est deja parti de la gare
                        mycfStyle = {
                            backgroundColor: "gray",
                        }
                        myHaStyle = {
                            color: "lightgrey",
                        }
                        horaireArriveeGare = horaireDepartGare;
                    }else if (diffFromNow(horaireDepartGare) < 1) {
                        // Le train est en arret a la gare
                        mycfCssClass = mycfCssClass + "clignote "
                        mycfStyle = {}
                        myHaStyle = {}
                        horaireArriveeGare = horaireDepartGare;
                    }else{
                        // Le train n'a pas encore passe par la gare
                        mycfStyle = {}
                        myHaStyle = {}
                    }
                } else if (horaireDepartGare == null) {
                    // Le train ne feras pas de depart de la gare
                    mycfStyle = {
                        display: "none",
                    }
                } else if (horaireArriveeGare == null) {
                    // Le train ne s'arretera pas a la gare
                    mycfStyle = {
                        display: "none",
                    }
                } else if (diffFromNow(horaireDepartGare) < 0) {
                    // Le train est deja parti de la gare
                    mycfStyle = {
                        backgroundColor: "gray",
                    }
                    myHaStyle = {
                        color: "lightgrey",
                    }
                    horaireArriveeGare = horaireDepartGare;
                } else if ((diffFromNow(horaireArriveeGare) <= 0) && (diffFromNow(horaireDepartGare) >= 0)) {
                    // Le train est en arret a la gare
                    mycfCssClass = mycfCssClass + "clignote "
                    mycfStyle = {}
                    myHaStyle = {}
                    horaireArriveeGare = horaireDepartGare;
                } else {
                    // Le train n'a pas encore passe par la gare
                    mycfStyle = {}
                    myHaStyle = {}
                }
                tr.push(this.renderHoraire("cf" + String.fromCharCode(80 + j) + i, mycfCssClass, mycfStyle, "ha" + String.fromCharCode(80 + j) + i, myHaStyle, horaireArriveeGare));
            }
            line.push(<tr key={2020 + j}>{tr}</tr>);
        }
        body.push(<tbody key={2021}>{line}</tbody>);

        return body;
    }

    renderTrain() {
        var today = new Date();
        let now = 100 * today.getHours() + today.getMinutes();

        let trains = [];

        let numTrainMin = getMinNumLigne(this.state.data.lines);

        for (let i = numTrainMin; i < this.state.data.lines.length; i++) {
            let id = "train" + i;
            let cssTop = 74 + 35.2 * (i - numTrainMin);
            let cssLeft;
            let cssWidth = 9.1;

            let size = this.state.data.lines[i].length;

            let horaires = this.state.data.lines[i].slice(0, size);

            for (let index = 2; index < size; index++) {
                if (horaires[index] == null) {
                    horaires[index] = horaires[index - 1];
                }
            }
            for (let index = size - 1; index > 0; index--) {
                if (horaires[index] == null) {
                    horaires[index] = horaires[index + 1];
                }
            }

            let horaireDebut = parseInt(horaires[1].replace(":", ""));
            let horaireFin = parseInt(horaires[size - 1].replace(":", ""));

            let isDisplay = false;
            if ((horaireDebut < now) && (now < horaireFin)) {
                isDisplay = true;
            }

            if (isDisplay) {

                let d = size - 1;
                let gareDepartNonTrouve = true;
                let gareEnCoursNonTrouve = true;
                let indexGareDepart = 0;
                while ((gareDepartNonTrouve) && (gareEnCoursNonTrouve) && (d > 0)) {
                    if (parseInt(horaires[d].replace(":", "")) < now) {
                        gareDepartNonTrouve = false;
                    } else if (parseInt(horaires[d].replace(":", "")) == now) {
                        gareEnCoursNonTrouve = false;
                    } else {
                        d--;
                    }
                }
                // Cas ou le train ne passe pas par toutes les gares
                let trainMultiple = 1;
                if (!gareDepartNonTrouve) {
                    while ((horaires[d] == horaires[d - 1]) && (d > 0)) {
                        trainMultiple = trainMultiple + 0.5;
                        d--;
                    }
                    indexGareDepart = d;
                }
                if (!gareEnCoursNonTrouve) {
                    isDisplay = false;
                }

                if (indexGareDepart % 2 == 0) indexGareDepart++;
                cssLeft = 9.1 * (indexGareDepart / 2);
                cssWidth = cssWidth * trainMultiple;
            }

            let style = {
                display: isDisplay ? "block" : "none",
                left: cssLeft + "%",
                width: cssWidth + "%",
                top: cssTop + "px",
            }

            let idNumTrain = "numTrain_" + id;
            let numTrainCssStyle = {
                top: (cssTop - 16) + "px",
            }
            let numTrain = horaires[0].replace("L", "");

            trains.push(<Train key={i}
                id={id}
                style={style}
                idNumTrain={idNumTrain}
                numTrainCssStyle={numTrainCssStyle}
                numTrain={numTrain}
            />)
        }
        return trains;
    }

    renderBandeInfo(message, now) {
        return (
            <BandeInfo
                message={message}
                now={now}
            />
        )
    }

    renderTitreGare(i, gareId, titreGareCssClass, titreGare) {
        return (
            <TitreGare key={i}
                gareId={gareId}
                titreGareCssClass={titreGareCssClass}
                titreGare={titreGare}
            />
        );
    }

    renderHoraire(i, cfClignote, cfStyle, haIndex, haStyle, haValue) {
        return (
            <Horaire key={i}
                cfIndex={i}
                cfClignote={cfClignote}
                cfStyle={cfStyle}
                haIndex={haIndex}
                haStyle={haStyle}
                haValue={haValue}
            />
        );
    }

    render() {

        const tableStyle = {
            marginBottom: "0px",
            position: "relative",
            zIndex: "3",
        }
        let today = new Date();
        let minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
        let now = today.getHours() + ":" + minutes;
        let message = "Données valables depuis 01 Jan. 2020";

        return (
            <div>
                {this.renderTrain()}
                {this.renderBandeInfo(message, now)}
                <table id="grille"
                    className="table table-borderless"
                    style={tableStyle}>
                    {this.renderTrainLine()}
                </table>
                <Switch
                    isFromCP={this.state.isFromCP}
                    onChange={(event) => this.handleChange(event)}
                />
            </div>
        );
    }

}
export default TrainLine
