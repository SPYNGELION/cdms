<?php
    include "cds_ctrl-data.php";
    include "cds_ctrl-file.php";
    $iResponse["flag"] = "TRUE";
    $iResponse["error"] = "0";
    $iPatientId = $_POST["patientid"];
    $iSql = sprintf("SELECT * FROM cds_originaldata WHERE cCol00 = %d;", $iPatientId);
    $iResult = dbquery($iSql);
    if ($iResult->num_rows > 0) {
        while ($iRow = $iResult->fetch_assoc()) {
            $iFileName = $iRow["cCol01"];
            if (!cosdeletefile($iFileName)) {
                $iResponse["flag"] = "FALSE";
                $iResponse["error"] = "1";
                echo json_encode($iResponse);
                return;
            }
        }
    }
    $iSql = sprintf("DELETE FROM cds_originaldata WHERE cCol00 = %d;", $iPatientId);
    if (strpos(dbquery($iSql), "Error: ") !== false) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "2";
        echo json_encode($iResponse);
        return;
    }
    $iSql = sprintf("DELETE FROM cds_diagnosticinfotmation WHERE cCol00 = %d;", $iPatientId);
    if (strpos(dbquery($iSql), "Error: ") !== false) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "3";
        echo json_encode($iResponse);
        return;
    }
    $iSql = sprintf("DELETE FROM cds_patientinfomation WHERE cCol00 = %d;", $iPatientId);
    if (strpos(dbquery($iSql), "Error: ") !== false) {
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "4";
        echo json_encode($iResponse);
        return;
    }
    echo json_encode($iResponse);
    return;
?>
