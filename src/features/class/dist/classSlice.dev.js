"use strict";

var _toolkit = require("@reduxjs/toolkit");

var newClassId = 0;
var classSlice = (0, _toolkit.createSlice)({
  name: 'classes',
  initialState: {
    classes: [],
    currentClass: null
  },
  reducers: {
    addClass: {
      reducer: function reducer(state, action) {
        var _action$payload = action.payload,
            id = _action$payload.id,
            className = _action$payload.className,
            yearLevel = _action$payload.yearLevel,
            teacherName = _action$payload.teacherName;
        state.push({
          id: id,
          className: className,
          yearLevel: yearLevel,
          teacherName: teacherName
        });
      },
      prepare: function prepare(text) {
        return {
          payload: {
            className: className,
            id: newClassId++,
            yearLevel: yearLevel,
            teacherName: teacherName
          }
        };
      }
    },
    getClassSuccess: {
      reducer: function reducer(state, action) {}
    }
  }
});