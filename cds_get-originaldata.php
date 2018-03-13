<?php
    include "cds_ctrl-data.php";
    $iResponse["flag"] = "TRUE";
    $iResponse["error"] = "0";
    $iPatientId = $_POST["patientid"];
    $iSql = sprintf("SELECT * FROM cds_originaldata WHERE cCol00 = %d;", $iPatientId);
    $iResult = dbquery($iSql);
    if ($iResult->num_rows > 0) {
        $i = 0;
        while ($iRow = $iResult->fetch_assoc()) {
            $iFileName = $iRow["cCol01"];
            $iResponse["filelist"][$i] = $iFileName;
            $i++;
        }
    } else {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "1";
    }
    echo json_encode($iResponse);
    return;
?>
