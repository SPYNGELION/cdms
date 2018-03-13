<?php
    include "cds_ctrl-data.php";
    session_start();
    if ($_SESSION["username"] === null) {
        return;
    }
    $iResult = dbquery("SELECT * FROM cds_patientinfomation ORDER BY cCol00;");
    $i = 0;
    if ($iResult->num_rows > 0) {
        while ($iRow = $iResult->fetch_assoc()) {
            $j = 0;
            foreach ($iRow as $iCol) {
                $iPatientList[$i][$j] = $iCol;
                $j++;
            }
            $i++;
        }
    }
    echo json_encode($iPatientList);
?>
