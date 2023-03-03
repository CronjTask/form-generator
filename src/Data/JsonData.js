export const JsonData = [
  {
    id: "header_1",
    "item-type": "header",
    content: "Application Form",
    size: "medium",
    subheader: "Make it easier",
    textAlign: "center",
  },
  {
    id: "form_1",
    "item-type": "form",
    children: [
      {
        id: "title",
        "item-type": "input",
        label: "Title",
        fluid: true,
        "other-required": false,
      },
      {
        id: "formgroup_1",
        "item-type": "formgroup",
        widths: "equal",
        children: [
          {
            id: "firstname",
            "item-type": "input",
            label: "First name",
            fluid: true,
          },
          {
            id: "lastname",
            "item-type": "input",
            label: "Last name",
            fluid: true,
          },
        ],
      },
      {
        id: "type",
        "item-type": "dropdown",
        label: "Type",
        fluid: true,
        selection: true,
        "data-elements":
          '[  { "key": 0, "value": 3, "text": "" },  { "key": 1, "value": 1, "text": "Value 1" },  { "key": 2, "value": 2, "text": "Value 2" },  { "key": 3, "value": 3, "text": "Value 3" }]',
        placeholder: "",
      },
      {
        id: "comment",
        "item-type": "textarea",
        label: "Comment",
        fluid: true,
        rows: 5,
      },
    ],
  },
  {
    id: "btnDisplay",
    "data-buildertype": "button",
    content: "Display JSON",
    primary: true,
    fluid: true,
    events: {},
  },
];

export const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "userId",
    headerName: "userId",
  },
  {
    field: "title",
    headerName: "User Title",
  },
  {
    field: "completed",
    headerName: "Completed",
  },
];
