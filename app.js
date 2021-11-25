console.log('working');
console.log('Working');
let baseURL = 'http://eu-api.backendless.com/B14E7C0F-3786-8D8A-FFED-FCE837614900/0043A237-B675-4E1E-AA60-7249A330FF21/data/events?where=kaafal_user_id.company_id%3D31';
// baseURL = 'http://eu-api.backendless.com/B14E7C0F-3786-8D8A-FFED-FCE837614900/0043A237-B675-4E1E-AA60-7249A330FF21/data/events?where=kaafal_user_id.company_id%3D31&pageSize=5&offset=2';
// const offset;
// const pageSize;
// const URL;

$(document).ready(function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseURL, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var newData = JSON.parse(xmlhttp.responseText);
            $("#Tab").DataTable({
                data: newData,
                "columns": [
                    { "data": "checkpoint" },
                    { "data": "tour_id" },
                    { "data": "note" },
                    { "data": "latitude" },
                    { "data": "created_at" },
                    { "data": "ownerId" },
                    { "data": "long" },
                    { "data": "event_type" },
                    { "data": "incident_id" },
                    { "data": "media_type" },
                    { "data": "incident_closed_by" },
                    { "data": "___class" },
                    { "data": "kaafal_users" },
                    { "data": "lat" },
                    { "data": "is_mme" },
                    { "data": "objectId" },
                    { "data": "longitude" },
                    { "data": "company_id" },
                    { "data": "checkpoint_code" },
                    { "data": "created" },
                    { "data": "deleted_at" },
                    { "data": "event_url" },
                    { "data": "incident_close_date" },
                    { "data": "incident_status" },
                    { "data": "node" },
                    { "data": "incident_comment" },
                    { "data": "event_id" },
                    { "data": "user_id" },
                    { "data": "updated" },
                    { "data": "courseid" },
                ]
            });
        }
    }
    xmlhttp.send();
})