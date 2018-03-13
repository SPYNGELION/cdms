<?php
    include "cds_ctrl-data.php";
    include "cds_ctrl-file.php";
    $iResponse["flag"] = "TRUE";
    $iResponse["error"] = "0";
    $iFileName = $_POST["filename"];
    if (!cosdeletefile($iFileName)) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "1";
        echo json_encode($iResponse);
        return;
    }
    $iSql = sprintf("DELETE FROM cds_originaldata WHERE cCol01 = \"%s\"", $iFileName);
    if (strpos(dbquery($iSql), "Error: ") !== false) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "2";
        echo json_encode($iResponse);
        return;
    }
    echo json_encode($iResponse);
    return;
?>
