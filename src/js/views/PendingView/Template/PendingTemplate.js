const PendingTemplate = `
<div class="pending-wrapper">
    <div class="input">
        <div class="prev">
            <textarea class="prev-text" placeholder="// Paste previous pending here"></textarea>
        </div>
        <div class="curr">
            <textarea class="curr-text" placeholder="// Paste current pending here"></textarea>
        </div>
    </div>
    <div class="result">
        <div class='result-text'></div>
        <div class='config'>
            <div class="config-jul">
                <div class="config-label">
                    Config
                </div>
                <hr>
                <div class="config-jul">
                    <div>
                        <span class="jul-label">From: </span>
                        <input class="jul-input" type="number" placeholder="Julian Begin" id="jul-begin">
                    </div>

                    <div>
                        <span class="jul-label">To: </span>
                        <input class="jul-input" type="number" placeholder="Julian End" id="jul-end">
                    </div>
                    <div class="jul-days-line">
                        <span class="jul-label">Days: </span>
                        <input class="jul-input" type="number" placeholder="Default: 14" id="jul-range" min=0>
                    </div>

                </div>
            </div>
            <div class="config-controller">
                <button class="config-apply">Apply</button>
            </div>
        </div>
    </div>
</div>
<button class="updatePendingBtn">Update Pending</button>

`
export default PendingTemplate;
