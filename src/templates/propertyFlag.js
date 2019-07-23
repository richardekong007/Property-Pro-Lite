const template = `
    <div class = "dialog-container">
        <div class = "dialog-header">
            <span class = "dialog-title">Report Advert</span>
            <button class = "close-rect smaller-text">x</button>
        </div>
        <form class = "property-form">
            <textarea class = "flag-text-area" rows = "4" cols = "50" placeholder = "Reason"  title = "Reason" data-reason required></textarea>
            <br><br>
            <textarea class = "flag-text-area" rows = "4" cols = "50" placeholder = "Description" title = "Description" data-desc required></textarea>
            <br><br>
            <button id = "done" class = "fab tooltip">
                <img src = "./vectors/tick.svg" alt ="tick" width = "25px" height = "25px"/>
                <span class = "tooltiptext small-text">Submit report</span>
            </button>
        </form>
    <div>`;

    export default template;