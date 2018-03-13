<?php
    include "cds_ctrl-data.php";
    session_start();
    $iResponse["flag"] = "TRUE";
    $iResponse["error"] = "0";
    $iUsername = $_POST["username"];
    $iPassword = md5($_POST["password"]);
    $iSql = sprintf("SELECT count(cId) FROM cds_user WHERE cCol00 = \"%s\" AND cCol01 = \"%s\";", $iUsername, $iPassword);
    $iResponse["sql"] = $iSql;
    $iResult = dbquery($iSql);
    $iRow = $iResult->fetch_row();
    if ($iRow[0] == 1) {
        $_SESSION["username"] = $iUsername;
    } else {
        $_SESSION["username"] = NULL;
        $iResponse["flag"] = "FALSE";
        $iResponse["error"] = "1";
    }
    echo json_encode($iResponse);
    return;
?>
