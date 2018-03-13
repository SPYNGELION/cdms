<?php
    include "cds_ctrl-data.php";
    $iResponse["flag"] = "TRUE";
    $iResponse["error"] = "0";
    $iCol00 = $_POST["cCol00"];
    $iCol01 = $_POST["cCol01"];
    $iCol02 = $_POST["cCol02"];
    $iSql = sprintf("DELETE FROM cds_diagnosticinfotmation WHERE cCol00 = %d;", $iCol00);
    if (strpos(dbquery($iSql), "Error: ") !== false) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "1";
        echo json_encode($iResponse);
        return;
    }
    $iSql = sprintf("INSERT INTO cds_diagnosticinfotmation VALUE(NULL, %d, \"%s\");", $iCol00, $iCol02);
    if (strpos(dbquery($iSql), "Error: ") !== false) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "2";
        echo json_encode($iResponse);
        return;
    }
    echo json_encode($iResponse);
    return;
?>
