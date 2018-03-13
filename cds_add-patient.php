<?php
    include "cds_ctrl-data.php";
    $iResponse["flag"] = "TRUE";
    $iResponse["error"] = "0";
    $iCol00 = $_POST["cCol00"];
    $iCol01 = $_POST["cCol01"];
    $iCol02 = $_POST["cCol02"];
    $iCol03 = $_POST["cCol03"];
    $iCol04 = $_POST["cCol04"];
    $iCol05 = $_POST["cCol05"];
    $iCol06 = $_POST["cCol06"];
    $iCol07 = $_POST["cCol07"];
    $iCol08 = $_POST["cCol08"];
    $iCol09 = $_POST["cCol09"];
    $iCol10 = $_POST["cCol10"];
    $iCol11 = $_POST["cCol11"];
    $iCol12 = $_POST["cCol12"];
    $iCol13 = $_POST["cCol13"];
    $iSql = sprintf("INSERT INTO cds_patientinfomation VALUE(NULL, %d, \"%s\", \"%s\", %d, %d, \"%s\", %d, \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", %d);", $iCol00, $iCol01, $iCol02, $iCol03, $iCol04, $iCol05, $iCol06, $iCol07, $iCol08, $iCol09, $iCol10, $iCol11, $iCol12, $iCol13);
    if (strpos(dbquery($iSql), "Error: ") !== false) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "1";
        echo json_encode($iResponse);
        return;
    }
    echo json_encode($iResponse);
    return;
?>
