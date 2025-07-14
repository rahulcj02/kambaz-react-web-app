export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h2>Assignment Name</h2></label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of your Web application running
                on Netlify. The landing page should include the following: Your full name and section Links to each of
                the lab assignments. Link to the Kanbas application. Links to all relevant source code repositories.
                The Kambaz application should include a link to navigate back to the landing page.
            </textarea><br /><br />

            <label htmlFor="wd-points">Points </label>
            <input id="wd-points" value="100" /><br /><br />


            <label htmlFor="wd-group">Assignment Group </label>
            <select>
                <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
            </select><br /><br />

            <label htmlFor="wd-display-grade-as">Display Grade as </label>
            <select>
                <option value="PERCENTAGE" selected>Percentage</option>
                <option value="NUMBERS">Numbers</option>
            </select><br /><br />

            <label htmlFor="wd-submission-type">Submission Type </label>
            <select>
                <option value="ONLINE" selected>Online</option>
                <option value="INPERSON">In Person</option>
            </select><br /><br />

            <label>Online Entry Options</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label><br /><br />

            <table>
                <tr>
                    <td style={{ verticalAlign: 'top' }}>
                        Assign
                    </td>
                    <td style={{ verticalAlign: 'top' }}>
                        <div>
                            <label htmlFor="wd-assign-to" style={{ marginRight: '10px' }}>Assign to</label>
                            <br />
                            <input id="wd-assign-to" value="Everyone" style={{ marginBottom: '10px' }}></input>

                            <div style={{ marginTop: '10px' }}>
                                <label htmlFor="wd-due-date" style={{ marginRight: '10px' }}>Due</label>
                                <br />
                                <input id="wd-due-date" value="2024-05-13" type="date"></input>
                            </div>

                            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <label htmlFor="wd-available-from" style={{ marginRight: '10px' }}>Available from</label>
                                    <br />
                                    <input id="wd-available-from" value="2024-05-06" type="date"></input>
                                </div>

                                <div>
                                    <label htmlFor="wd-available-until" style={{ marginRight: '10px' }}>Until</label>
                                    <br />
                                    <input id="wd-available-until" value="2024-05-20" type="date"></input>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <hr />
            <table width="100%">
                <tr>
                    <td></td>
                    <td></td>
                    <td style={{ textAlign: 'right' }}>
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}