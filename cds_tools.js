function maketabletitle(iSystemId) {
    var iRow = $("<tr></tr>");
    switch (iSystemId) {
        case 0:    //患者信息系统表头
            iRow.append($("<td></td>").append($("<p></p>").append("编号")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("姓名")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("姓名缩写")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("性别")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("年龄")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("民族")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("婚况")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("身份证号")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("职业")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("联系电话")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("出生地")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("首诊日期")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("常住地")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("费别")).css("text-align", "center"));
            var iButton = $("<button></button>").css("width", "100%");
            iButton.append($("<p></p>").append("添加患者"));
            iButton.addClass("patient-add ui-button ui-widget ui-corner-all");
            iRow.append($("<td colspan=\"2\"></td>").css("text-align", "center").append(iButton));
            break;
        case 1:    //诊断信息系统表头
            iRow.append($("<td></td>").append($("<p></p>").append("编号")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("姓名")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("性别")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("年龄")).css("text-align", "center"));
            iRow.append($("<td colspan=\"2\"></td>").css("text-align", "center"));
            break;
        case 2:    //原始数据管理表头
            iRow.append($("<td></td>").append($("<p></p>").append("编号")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("姓名")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("性别")).css("text-align", "center"));
            iRow.append($("<td></td>").append($("<p></p>").append("年龄")).css("text-align", "center"));
            iRow.append($("<td colspan=\"2\"></td>").css("text-align", "center"));
            break;
    }
    return iRow;
}

function createbutton(iSystemId, iButtonType, iPatientId) {
    var iButton = $("<button></button>").css("width", "100%");
    iButton.addClass("ui-button ui-widget ui-corner-all");
    switch (iSystemId) {
        case 0:
            if (iButtonType == 0) {
                iButton.attr("id", "edit-" + iPatientId + "_button");
                iButton.append($("<p>修改</p>")).addClass("patient-modify");
            } else if (iButtonType == 1) {
                iButton.attr("id", "del-" + iPatientId + "_button");
                iButton.append($("<p>删除</p>")).addClass("patient-delete");
            }
            break;
        case 1:
            if (iButtonType == 0) {
                iButton.attr("id", "view-" + iPatientId + "_button");
                iButton.append($("<p>查询</p>")).addClass("diagnostic-view");
            } else if (iButtonType == 1) {
                iButton.attr("id", "modify-" + iPatientId + "_button");
                iButton.append($("<p>修改</p>")).addClass("diagnostic-modify");
            }
            break;
        case 2:
            if (iButtonType == 0) {
                iButton.attr("id", "upload-" + iPatientId + "_button");
                iButton.append($("<p>上传资料</p>")).addClass("sourcedata-upload");
            } else if (iButtonType == 1) {
                iButton.attr("id", "view-" + iPatientId + "_button");
                iButton.append($("<p>查阅资料</p>")).addClass("sourcedata-view");
            }
            break;
    }
    return iButton;
}

function createpatientlisttable(iSystemId, iData) {
    var iSexList = new Array();
    iSexList[0] = "男";
    iSexList[1] = "女";
    var iInsuranceList = new Array();
    iInsuranceList[0] = "医保";
    iInsuranceList[1] = "自费";
    var iMarriage = new Array();
    iMarriage[0] = "未婚";
    iMarriage[1] = "已婚";
    iMarriage[2] = "离异";
    iMarriage[3] = "丧偶";
    var iTable = $("<table border=\"1\"></table>");
    iTable.append(maketabletitle(iSystemId));
    switch (iSystemId) {
        case 0:    //患者信息系统
            $.each(iData, function (iIndex, iPatient) {
                var iRow = $("<tr></tr>");
                for (var j = 1; j < iPatient.length; j++) {
                    var iTemp = iPatient[j];
                    if (j == 4) {iTemp = iSexList[iTemp];}
                    if (j == 7) {iTemp = iMarriage[iTemp];}
                    if (j == 14) {iTemp = iInsuranceList[iTemp];}
                    iRow.append($("<td></td>").append(iTemp).css("text-align", "center"));
                }
                iRow.append($("<td></td>").append(createbutton(iSystemId, 0, iPatient[1])).css("text-align", "center"));
                iRow.append($("<td></td>").append(createbutton(iSystemId, 1, iPatient[1])).css("text-align", "center"));
                iTable.append(iRow);
            });
            break;
        case 1:    //诊断信息系统
            $.each(iData, function (iIndex, iPatient) {
                var iRow = $("<tr></tr>");
                iRow.append($("<td></td>").append(iPatient[1]).css("text-align", "center"));
                iRow.append($("<td></td>").append(iPatient[2]).css("text-align", "center"));
                iRow.append($("<td></td>").append(iSexList[iPatient[4]]).css("text-align", "center"));
                iRow.append($("<td></td>").append(iPatient[5]).css("text-align", "center"));
                iRow.append($("<td></td>").append(createbutton(iSystemId, 0, iPatient[1])).css("text-align", "center"));
                iRow.append($("<td></td>").append(createbutton(iSystemId, 1, iPatient[1])).css("text-align", "center"));
                iTable.append(iRow);
            });
            break;
        case 2:    //原始数据管理：
            $.each(iData, function (iIndex, iPatient) {
                var iRow = $("<tr></tr>");
                iRow.append($("<td></td>").append(iPatient[1]).css("text-align", "center"));
                iRow.append($("<td></td>").append(iPatient[2]).css("text-align", "center"));
                iRow.append($("<td></td>").append(iSexList[iPatient[4]]).css("text-align", "center"));
                iRow.append($("<td></td>").append(iPatient[5]).css("text-align", "center"));
                iRow.append($("<td></td>").append(createbutton(iSystemId, 0, iPatient[1])).css("text-align", "center"));
                iRow.append($("<td></td>").append(createbutton(iSystemId, 1, iPatient[1])).css("text-align", "center"));
                iTable.append(iRow);
            });
            break;
    }
    return iTable;
}

function modifydiagnostic(iFormData) {
    $.ajax({
        type: "POST",
        url: "cds_modify-diagnosticinformation.php",
        data: iFormData,
        success: function (iData, iTextStatus, iJqXHR) {
            if (iData["flag"] == "TRUE") {
                alert("Modify ACCEPTED.");
            } else {
                alert("Modify ERROR: " + iData["error"] + ".");
            }
            $("#modify-diagnostic_dialog").dialog("close");
            printpatientlist(1);
        },
        dataType: "json"
    });
}

function setpatientname(iPatientId) {
    $.ajax({
        type: "POST",
        url: "cds_get-patientname.php",
        data: {patientid: iPatientId},
        success: function (iData, iTextStatus, iJqXHR) {
            $("#cCol01").val(iData);
        },
        dataType: "text"
    });
}

function importpatientdata(iDialogType, iPatientId) {
    switch (iDialogType) {
        case 0:
            $("#add-patient_form")[0].reset();
            break;
        case 1:
            $("#modify-patient_form")[0].reset();
            $.ajax({
                type: "POST",
                url: "cds_get-patientinformation.php",
                data: {patientid: iPatientId},
                success: function (iData, iTextStatus, iJqXHR) {
                    $("#cCol00").val(iData[0][1]).attr("disabled", true);
                    $("#cCol01").val(iData[0][2]);
                    $("#cCol02").val(iData[0][3]);
                    $("#cCol03").val(iData[0][4]).selectmenu("refresh");
                    $("#cCol04").val(iData[0][5]);
                    $("#cCol05").val(iData[0][6]);
                    $("#cCol06").val(iData[0][7]).selectmenu("refresh");
                    $("#cCol07").val(iData[0][8]);
                    $("#cCol08").val(iData[0][9]);
                    $("#cCol09").val(iData[0][10]);
                    $("#cCol10").val(iData[0][11]);
                    $("#cCol11").val(iData[0][12]);
                    $("#cCol12").val(iData[0][13]);
                    $("#cCol13").val(iData[0][14]).selectmenu("refresh");
                },
                dataType: "json"
            });
            break;
    }
}

function importdiagnosticdata(iDialogType, iPatientId) {
    switch (iDialogType) {
        case 0:
            $.ajax({
                type: "POST",
                url: "cds_get-patientdiagnostic.php",
                data: {patientid: iPatientId},
                success: function (iData, iTextStatus, iJqXHR) {
                    if (iData) {
                        $("#cCol00").val(iPatientId).attr("disabled", true);
                        $("#cCol01").val(iData[0][3]).attr("disabled", true);
                        $("#cCol02").val(iData[0][2]).attr("disabled", true);
                    } else {
                        $("#cCol00").val(iPatientId).attr("disabled", true);
                        setpatientname(iPatientId);
                        $("#cCol01").attr("disabled", true);
                        $("#cCol02").val("无诊断信息").attr("disabled", true);
                    }
                },
                dataType: "json"
            });
            break;
        case 1:
            $.ajax({
                type: "POST",
                url: "cds_get-patientdiagnostic.php",
                data: {patientid: iPatientId},
                success: function (iData, iTextStatus, iJqXHR) {
                    if (iData) {
                        $("#cCol00").val(iPatientId).attr("disabled", true);
                        $("#cCol01").val(iData[0][3]).attr("disabled", true);
                        $("#cCol02").val(iData[0][2]);
                    } else {
                        $("#cCol00").val(iPatientId).attr("disabled", true);
                        setpatientname(iPatientId);
                        $("#cCol01").attr("disabled", true);
                    }
                },
                dataType: "json"
            });
            break;
    }
}

function importpatientsourcedata(iPatientId) {
    $.ajax({
        type: "POST",
        url: "cds_get-patientinformation.php",
        data: {patientid: iPatientId},
        success: function (iData, iTextStatus, iJqXHR) {
            $("#cCol00").val(iData[0][1]).attr("disabled", true);
            $("#cCol01").val(iData[0][2]).attr("disabled", true);
        },
        dataType: "json"
    });
}

function opendialog(iSystemId, iDialogType, iPatientId) {
    switch (iSystemId) {
        case 0:
            if (iDialogType == 0) {
                $.ajax({
                    type: "GET",
                    url: "cds_patient-infomation.txt",
                    success: function (iData, iTextStatus, iJqXHR) {
                        var iForm = $("<form id =\"add-patient_form\"></form>").append($("<fieldset></fieldset>").append(iData));
                        $("#add-patient_dialog").empty();
                        $("#add-patient_dialog").append(iForm);
                        importpatientdata(iDialogType, iPatientId);
                        $("#cCol03").selectmenu().selectmenu("option", "width", 180);
                        $("#cCol06").selectmenu().selectmenu("option", "width", 180);
                        $("#cCol13").selectmenu().selectmenu("option", "width", 180);
                        $("#add-patient_dialog").dialog("open");
                    },
                    dataType: "html"
                });
            } else if (iDialogType == 1) {
                $.ajax({
                    type: "GET",
                    url: "cds_patient-infomation.txt",
                    success: function (iData, iTextStatus, iJqXHR) {
                        var iForm = $("<form id =\"modify-patient_form\"></form>").append($("<fieldset></fieldset>").append(iData));
                        $("#modify-patient_dialog").empty();
                        $("#modify-patient_dialog").append(iForm);
                        importpatientdata(iDialogType, iPatientId);
                        $("#cCol03").selectmenu().selectmenu("option", "width", 180);
                        $("#cCol06").selectmenu().selectmenu("option", "width", 180);
                        $("#cCol13").selectmenu().selectmenu("option", "width", 180);
                        $("#modify-patient_dialog").dialog("open");
                    },
                    dataType: "html"
                });
            }
            break;
        case 1:
            if (iDialogType == 0) {
                $.ajax({
                    type: "GET",
                    url: "cds_diagnostic-information.txt",
                    success: function (iData, iTextStatus, iJqXHR) {
                        var iForm = $("<form></form>").attr("id", "view-diagnostic_form");
                        iForm.append($("<fieldset></fieldset>").append(iData));
                        $("#view-diagnostic_dialog").empty();
                        $("#view-diagnostic_dialog").append(iForm);
                        importdiagnosticdata(iDialogType, iPatientId);
                        $("#view-diagnostic_dialog").dialog("open");
                    },
                    dataType: "html"
                });
            } else if (iDialogType == 1) {
                $.ajax({
                    type: "GET",
                    url: "cds_diagnostic-information.txt",
                    success: function (iData, iTextStatus, iJqXHR) {
                        var iForm = $("<form></form>").attr("id", "modify-diagnostic_form");
                        iForm.append($("<fieldset></fieldset>").append(iData));
                        $("#modify-diagnostic_dialog").empty();
                        $("#modify-diagnostic_dialog").append(iForm);
                        importdiagnosticdata(iDialogType, iPatientId);
                        $("#modify-diagnostic_dialog").dialog("open");
                    },
                    dataType: "html"
                });
            }
            break;
        case 2:
            if (iDialogType == 0) {
                $.ajax({
                    type: "GET",
                    url: "cds_source-data.txt",
                    success: function (iData, iTextStatus, iJqXHR) {
                        var iForm = $("<form></form>").attr("id", "upload-data_form");
                        iForm.attr("enctype", "multipart/form-data");
                        iForm.append($("<fieldset></fieldset>").append(iData));
                        $("#upload-data_dialog").empty();
                        $("#upload-data_dialog").append(iForm);
                        importpatientsourcedata(iPatientId);
                        $("#upload-data_dialog").dialog("open");
                    },
                    dataType: "html"
                });
            }
            break;
    }
}

function addpatient(iFormData) {
    $.ajax({
        type: "POST",
        url: "cds_add-patient.php",
        data: iFormData,
        success: function (iData, iTextStatus, iJqXHR) {
            if (iData["flag"] == "TRUE") {
                alert("Add ACCEPTED.");
            } else {
                alert("Add ERROR: " + iData["error"] + ".");
            }
            $("#add-patient_dialog").dialog("close");
            printpatientlist(0);
        },
        dataType: "json"
    });
}

function modifypatient(iFormData) {
    $.ajax({
        type: "POST",
        url: "cds_modify-patient.php",
        data: iFormData,
        success: function (iData, iTextStatus, iJqXHR) {
            if (iData["flag"] == "TRUE") {
                alert("Modify ACCEPTED.");
            } else {
                alert("Modify ERROR: " + iData["error"] + ".");
            }
            $("#modify-patient_dialog").dialog("close");
            printpatientlist(0);
        },
        dataType: "json"
    });
}

function deletepatient(iPatientId) {
    $.ajax({
        type: "POST",
        url: "cds_delete-patient.php",
        data: {patientid: iPatientId},
        success: function (iData, iTextStatus, iJqXHR) {
            if (iData["flag"] == "TRUE") {
                alert("Delete ACCEPTED.");
            } else {
                alert("Delete ERROR: " + iData["error"] + ".");
            }
            printpatientlist(0);
        },
        dataType: "json"
    });
}

function cosputfile(iPatientId, iFile) {
    var iCosClient = new COS({
            getAuthorization: function (iOptions, iCallback) {
                $.ajax({
                    type: "GET",
                    url: "lib/cos-js/server/auth.php",
                    data: {method: (iOptions.Method || 'get').toLowerCase(), pathname: '/' + (iOptions.Key || '')},
                    success: function (iAuthorization) {
                        iCallback(iAuthorization);
                    },
                    dataType: "text"
                });
            }
        });
     var iParams = {
         Bucket: "spyngelion-frankfurt-1251209287",
         Region: "eu-frankfurt",
         Key: "cdms/" + iFile.name,
         Body: iFile
     };
     iCosClient.putObject(iParams, function (iError, iData) {
         if (!iError) {
             $.ajax({
                 type: "POST",
                 url: "cds_upload-data.php",
                 data: {patientid: iPatientId, filename: iFile.name},
                 success: function (iData, iTextStatus, iJqXHR) {
                     if (iData["flag"] == "TRUE") {
                         $("#uploadstatus_div").append($("<p></p>").append(iFile.name + " ACCEPTED."));
                     } else {
                         $("#uploadstatus_div").append($("<p></p>").append(iFile.name + " ERROR: 4."));
                     }
                 },
                 dataType: "json"
             });

         } else {
             $("#uploadstatus_div").append($("<p></p>").append(iFile.name + " ERROR: 3."));
         }
     });
}

function coscheckfile(iPatientId, iFile) {
    if ((iFile.type == "image/jpeg") || (iFile.type == "image/png") || (iFile.type == "image/pjpeg")) {
        var iCosClient = new COS({
            getAuthorization: function (iOptions, iCallback) {
                $.ajax({
                    type: "GET",
                    url: "lib/cos-js/server/auth.php",
                    data: {method: (iOptions.Method || 'get').toLowerCase(), pathname: '/' + (iOptions.Key || '')},
                    success: function (iAuthorization) {
                        iCallback(iAuthorization);
                    },
                    dataType: "text"
                });
            }
        });
        var iParams = {
            Bucket: "spyngelion-frankfurt-1251209287",
            Region: "eu-frankfurt",
            Key: "cdms/" + iFile.name
        };
        iCosClient.headObject(iParams, function (iError, iData) {
            if (iError) {
                cosputfile(iPatientId, iFile);
            } else {
                $("#uploadstatus_div").append($("<p></p>").append(iFile.name + " ERROR: 2."));
            }
        });
    } else {
        $("#uploadstatus_div").append($("<p></p>").append(iFile.name + " ERROR: 1."));
    }
}

function uploaddata() {
    $("#uploadstatus_div").empty();
    var iPatientId = $("#cCol00").val();
    $.each($("#cCol02")[0].files, function (iIndex, iFile) {
        coscheckfile(iPatientId, iFile);
    });
}

function bingwidgetaction(iSystemId) {
    switch (iSystemId) {
        case 0:    //患者信息系统：绑定控件动作
            $("#add-patient_dialog").remove();
            $(document.body).append($("<div></div>").attr("id", "add-patient_dialog").attr("title", "添加患者信息"));
            $("#add-patient_dialog").dialog({
                autoOpen: false,
                modal: true,
                width: 800,
                height: 430,
                buttons: {
                    "确认": function () {
                        var iFormData = $("#add-patient_form").serialize();
                        addpatient(iFormData);
                    },
                    "取消": function () {
                        $(this).dialog("close");
                    }
                },
                close: function () {
                    $("#add-patient_form")[0].reset();
                    $("#add-patient_dialog").empty();
                }
            });
            $("#modify-patient_dialog").remove();
            $(document.body).append($("<div></div>").attr("id", "modify-patient_dialog").attr("title", "修改患者信息"));
            $("#modify-patient_dialog").dialog({
                autoOpen: false,
                modal: true,
                width: 800,
                weight: 430,
                buttons: {
                    "确认": function () {
                        $("#cCol00").removeAttr("disabled");
                        var iFormData = $("#modify-patient_form").serialize();
                        modifypatient(iFormData);
                    },
                    "取消": function () {
                        $(this).dialog("close");
                    }
                },
                close: function () {
                    $("#modify-patient_form")[0].reset();
                    $("#modify-patient_dialog").empty();
                }
            });
            $(".patient-add").button().on("click", function () {
                opendialog(iSystemId, 0, 0);
            });
            $(".patient-modify").button().on("click", function () {
                var iPatientId = $(this)[0].id;
                iPatientId = iPatientId.substring(iPatientId.search("-") + 1, iPatientId.search("_"));
                opendialog(iSystemId, 1, iPatientId);
            });
            $(".patient-delete").button().on("click", function () {
                var iPatientId = $(this)[0].id;
                iPatientId = iPatientId.substring(iPatientId.search("-") + 1, iPatientId.search("_"));
                deletepatient(iPatientId);
            });
            break;
        case 1:    //诊断信息系统：绑定控件动作
            $("#view-diagnostic_dialog").remove();
            $(document.body).append($("<div></div>").attr("id", "view-diagnostic_dialog").attr("title", "查询诊断"));
            $("#modify-diagnostic_dialog").remove();
            $(document.body).append($("<div></div>").attr("id", "modify-diagnostic_dialog").attr("title", "修改诊断"));
            $("#view-diagnostic_dialog").dialog({
                autoOpen: false,
                modal: true,
                width: 640,
                height: 480,
                buttons: {
                    "关闭": function () {
                        $(this).dialog("close");
                    }
                },
                close: function () {
                    $("#view-diagnostic_form")[0].reset();
                    $("#view-diagnostic_dialog").empty();
                }
            });
            $("#modify-diagnostic_dialog").dialog({
                autoOpen: false,
                modal: true,
                width: 640,
                height: 480,
                buttons: {
                    "确认": function () {
                        $("#cCol00").removeAttr("disabled");
                        $("#cCol01").removeAttr("disabled");
                        var iFormData = $("#modify-diagnostic_form").serialize();
                        modifydiagnostic(iFormData);
                    },
                    "取消": function () {
                        $(this).dialog("close");
                    }
                },
                close: function () {
                    $("#modify-diagnostic_form")[0].reset();
                    $("#modify-diagnostic_dialog").empty();
                }
            });
            $(".diagnostic-view").button().on("click", function () {
                var iPatientId = $(this)[0].id;
                iPatientId = iPatientId.substring(iPatientId.search("-") + 1, iPatientId.search("_"));
                opendialog(iSystemId, 0, iPatientId);
            });
            $(".diagnostic-modify").button().on("click", function () {
                var iPatientId = $(this)[0].id;
                iPatientId = iPatientId.substring(iPatientId.search("-") + 1, iPatientId.search("_"));
                opendialog(iSystemId, 1, iPatientId);
            });
            break;
        case 2:    //原始数据管理：绑定控件动作
            $("#upload-data_dialog").remove();
            $(document.body).append($("<div></div>").attr("id", "upload-data_dialog").attr("title", "上传资料"));
            $("#upload-data_dialog").dialog({
                autoOpen: false,
                modal: true,
                width: 640,
                height: 480,
                buttons: {
                    "上传": function () {
                        uploaddata();
                    },
                    "取消": function () {
                        $(this).dialog("close");
                    }
                },
                close: function () {
                    $("#upload-data_form")[0].reset();
                    $("#upload-data_dialog").empty();
                    printpatientlist(2);
                }
            });
            $(".sourcedata-upload").button().on("click", function () {
                var iPatientId = $(this)[0].id;
                iPatientId = iPatientId.substring(iPatientId.search("-") + 1, iPatientId.search("_"));
                opendialog(iSystemId, 0, iPatientId);
            });
            $(".sourcedata-view").button().on("click", function () {
                var iPatientId = $(this)[0].id;
                iPatientId = iPatientId.substring(iPatientId.search("-") + 1, iPatientId.search("_"));
                var iUrl = "cds_ods.html" + "?patientid=" + iPatientId + "&n=" + Math.random();
                window.open(iUrl);
            });
            break;
        case 3:
            $(".sourcedata-delete").button().on("click", function () {
                var iFileName = $(this).attr("filename");
                $.ajax({
                    type: "POST",
                    url: "cds_delete-file.php",
                    data: {filename: iFileName},
                    success: function (iData, iTextStatus, iJqXHR) {
                        if (iData["flag"] == "TRUE") {
                            alert("Delete ACCEPTED.");
                        } else {
                            alert("Delete ERROR: " + iData["error"] + ".");
                        }
                        printoriginaldata();
                    },
                    dataType: "json"
                });
            });
            break;
        case 4:
            $("#login_form").on("submit", function (event) {
                event.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "cds_userlogin.php",
                    data: $("#login_form").serialize(),
                    success: function (iData) {
                        if (iData["flag"] == "TRUE") {
                            window.location.href = "cds_index.html";
                        } else {
                            alert("Login Failed.");
                            $("#login_form")[0].reset();
                        }
                    },
                    dataType: "json"
                });
            });
            break;
    }
}

function printpatientlist(iSystemId) {
    switch (iSystemId) {
        case 0:    //患者信息系统：获取患者列表
            $.ajax({
                type: "POST",
                url: "cds_get-patientlist.php",
                success: function (iData, iTextStatus, iJqXHR) {
                    var iTable = createpatientlisttable(iSystemId, iData);
                    $("#patientlist-00_div").empty();
                    $("#patientlist-00_div").append(iTable);
                    bingwidgetaction(iSystemId);
                },
                dataType: "json"
            });
            break;
        case 1:    //诊断信息系统：获取患者列表
            $.ajax({
                type: "POST",
                url: "cds_get-patientlist.php",
                success: function (iData, iTextStatus, iJqXHR) {
                    var iTable = createpatientlisttable(iSystemId, iData);
                    $("#patientlist-01_div").empty();
                    $("#patientlist-01_div").append(iTable);
                    bingwidgetaction(iSystemId);
                },
                dataType: "json"
            });
            break;
        case 2:    //原始数据管理：获取患者列表
            $.ajax({
                type: "POST",
                url: "cds_get-patientlist.php",
                success: function (iData, iTextStatus, iJqXHR) {
                    var iTable = createpatientlisttable(iSystemId, iData);
                    $("#patientlist-02_div").empty();
                    $("#patientlist-02_div").append(iTable);
                    bingwidgetaction(iSystemId);
                },
                dataType: "json"
            });
            break;
    }
}

function cosgetfile(iIndex, iFileName) {
    var iCosClient = new COS({
        getAuthorization: function (iOptions, iCallback) {
            $.ajax({
                type: "GET",
                url: "lib/cos-js/server/auth.php",
                data: {method: (iOptions.Method || 'get').toLowerCase(), pathname: '/' + (iOptions.Key || '')},
                success: function (iAuthorization) {
                    iCallback(iAuthorization);
                },
                dataType: "text"
            });
        }
    });
    iCosClient.getObjectUrl({
        Bucket: "spyngelion-frankfurt-1251209287",
        Region: "eu-frankfurt",
        Key: "/cdms/" + iFileName,
        Expires: 60,
        Sign: true}, function (iError, iData) {
            if (!iError) {
                var iImage = $("<img></img>").attr("alt", iFileName);
                iImage.attr("src", iData.Url);
                iImageTdSelect = "#img-" + iIndex;
                $(iImageTdSelect).empty();
                $(iImageTdSelect).append(iImage);
            }
        });
}

function printoriginaldata() {
    var iPatientId = location.search;
    iPatientId = iPatientId.substring(iPatientId.search("=") + 1, iPatientId.search("&"));
    $.ajax({
        type: "POST",
        url: "cds_get-originaldata.php",
        data: {patientid: iPatientId},
        success: function (iData, iTextStatus, iJqXHR) {
            if (iData["flag"] == "TRUE") {
                var iTable = $("<table border=\"1\"></table>");
                $.each(iData["filelist"], function (iIndex, iImage) {
                    var iRow = $("<tr></tr>");
                    iRow.append($("<td></td>").attr("id", "img-" + iIndex));
                    var iButton = $("<button></button>");
                    iButton.attr("id", "delete-" + iPatientId + "_button");
                    iButton.attr("filename", iImage);
                    iButton.append($("<p>删除资料</p>")).addClass("sourcedata-delete");
                    iRow.append($("<td></td>").append(iButton).css("text-align", "center"));
                    iTable.append(iRow);
                    cosgetfile(iIndex, iImage);
                });
                $("#originaldata_div").empty();
                $("#originaldata_div").append(iTable);
                bingwidgetaction(3);
            } else {
                alert("Get original data ERROR: " + iData["error"] + ".");
                window.close();
            }
        },
        dataType: "json"
    });
}
