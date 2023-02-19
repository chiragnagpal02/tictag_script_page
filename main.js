var card = document.getElementById("conti-2-cards");

data = [
    {   
        "script_number": "1",
        "script_name": "Count Bounding Boxes (YOLO)",
        "script_description": "Counting the number of Bounding Boxes in a YOLO file",
        "script_author": "Chirag N.",
        "script_comments": "Any Bounding Box Project",
        "projects": [
            "Any Bounding Box Project"
        ],
        "script_link": ""
    },
    {
        "script_number": "2",
        "script_name": "Merge_XMLS",
        "script_description": "Merge XML files",
        "script_author": "Bruno",
        "script_comments": "",
        "projects": [
            "Any Bounding Box Project"
        ],
        "script_link": ""
    },
    {
        "script_number": "3",
        "script_name": "Merge_XMLS",
        "script_description": "Merge XML files",
        "script_author": "Bruno",
        "script_comments": "",
        "projects": [
            "Any Bounding Box Project"
        ],
        "script_link": ""
    },
    {
        "script_number": "4",
        "script_name": "Merge_XMLS",
        "script_description": "Merge XML files",
        "script_author": "Bruno",
        "script_comments": "",
        "projects": [
            "Any Bounding Box Project"
        ],
        "script_link": ""
    },
    {
        "script_number": "5",
        "script_name": "Merge_XMLS",
        "script_description": "Merge XML files",
        "script_author": "Bruno",
        "script_comments": "",
        "projects": [
            "Any Bounding Box Project"
        ],
        "script_link": ""
    },
    {
        "script_number": "6",
        "script_name": "Merge_XMLS",
        "script_description": "Merge XML files",
        "script_author": "Bruno",
        "script_comments": "",
        "projects": [
            "Any Bounding Box Project"
        ],
        "script_link": ""
    },
    {
        "script_number": "7",
        "script_name": "Merge_XMLS",
        "script_description": "Merge XML files",
        "script_author": "Bruno",
        "script_comments": "",
        "projects": [
            "Any Bounding Box Project"
        ],
        "script_link": ""
    }
]

var data_len = data.length;

for (let i = 0 ; i < data_len ; i++) {
    var script_number = data[i].script_number;
    var script_name = data[i].script_name;
    var script_description = data[i].script_description;
    var script_author = data[i].script_author;
    var script_comments = data[i].script_comments;
    var projects = data[i].projects;
    var script_link = data[i].script_link;

    console.log(script_number);
    console.log(script_name);
    console.log(script_description);
    console.log(script_author);
    console.log(script_comments);
    console.log(projects);
    console.log(script_link);
}