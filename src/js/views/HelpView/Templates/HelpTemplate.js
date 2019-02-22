const HelpTemplate = `
</div>
<div class="guide">
    <h3> README</h3>
    <p>
        To prevent any issues, adhere to the usual procedure for resolveing pending specimens.
        Enter resolutions at the end of lines. Multi- Line resolutions are support.

        Painless pending is NOT guaranteed to work with any format other than the one printed from the standard pending
        list.
        Any edits or modifications to the original CAN affect the validity of outputted pending list.
    </p>
    <div style="background-color: #EEEEEE; width: 800px; height: 130px; border: rgb(92, 190, 1) solid 5px">
        N, 555-555-5555-0 55555555 PATIENT,PATIENT &ltM/999&gt WRONG, ASDF | 1234

        N, 555-555-5555-0 55555555 PATIENT,PATIENT &ltM/999&gt WRONG,
        DRY
    </div>

    <div style="background-color: #EEEEEE; width: 800px; height: 130px; border: rgb(202, 26, 26) solid 5px">
        WRONG N, 555-555-5555-0 55555555 PATIENT,PATIENT &ltM/999&gt &ltASDF&gt

        N, 555-555-5555-0 55555555 PATIENT,PATIENT WRONG &ltM/999&gt

        N, 555-555-5555-0 55555555 PATIENT,PATIENT &ltM/999
    </div>
</div>
<div class="log">
    <div class="log-1"></div>
</div>
</div>
`

export default HelpTemplate;
