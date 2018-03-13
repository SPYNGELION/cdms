<?php
    include "cds_ctrl-data.php";
    $iPatientId = $_POST["patientid"];
    $iPatientName = "";
    $iSql = sprintf("SELECT * FROM cds_patientinfomation WHERE cCol00 = %d LIMIT 1;", $iPatientId);
    $iResult = dbquery($iSql);
    if ($iResult->num_rows > 0) {
        while ($iRow = $iResult->fetch_assoc()) {
            $iPatientName = $iRow["cCol01"];
        }
    }
    $iSql = sprintf("SELECT * FROM cds_diagnosticinfotmation WHERE cCol00 = %d LIMIT 1;", $iPatientId);
    $iResult = dbquery($iSql);
    if ($iResult->num_rows > 0) {
        $i = 0;
        while ($iRow = $iResult->fetch_assoc()) {
            $j = 0;
            foreach ($iRow as $iCol) {
                $iPatientList[$i][$j] = $iCol;
                $j++;
            }
	    $iPatientList[$i][$j] = $iPatientName;
            $i++;
        }
    }
    echo json_encode($iPatientList);
?>
