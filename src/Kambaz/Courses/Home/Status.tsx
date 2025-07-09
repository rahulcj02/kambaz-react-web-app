export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2>Course Status</h2>
            <table>
                <tr>
                    <td>
                        <input type="button" id="wd-unpublish-btn" value="Unpublish" />
                    </td>
                    <td>
                        <input type="button" id="wd-publish-btn" value="Publish" />
                    </td>
                </tr>
            </table><br />
            <input type="button" id="wd-import-ext-btn" value="Import Existing Content" /><br />
            <input type="button" id="wd-import-com-btn" value="Import from Commons" /><br />
            <input type="button" id="wd-choose-home-btn" value="Choose Home Page" /><br />
            <input type="button" id="wd-view-course-btn" value="View Course Stream" /><br />
            <input type="button" id="wd-new-anon-btn" value="New Announcement" /><br />
            <input type="button" id="wd-new-ana-btn" value="New Analytics" /><br />
            <input type="button" id="wd-view-nots-btn" value="View Course Notifications" /><br />
        </div>
    )
}