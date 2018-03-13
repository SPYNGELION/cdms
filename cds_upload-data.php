<?php
    include "cds_ctrl-data.php";
    $iResponse["flag"] = "TRUE";
    $iResponse["error"] = "0";
    $iSql = sprintf("INSERT INTO cds_originaldata VALUE(NULL, %d, \"%s\");", $_POST["patientid"], $_POST["filename"]);
    if (strpos(dbquery($iSql), "Error: ") !== false) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "1";
        echo json_encode($iResponse);
        return;
    }
    echo json_encode($iResponse);
    return;
?>
