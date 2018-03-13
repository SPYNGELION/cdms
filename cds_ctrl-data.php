<?php
    function dbquery($sql)
    {
        $iServer = "127.0.0.1";
        $iUsername = "cdsuser";
        $iPassword = "AWODXk9fspIgsouO";
        $iDatabase = "cds";
        $iConn = new mysqli($iServer, $iUsername, $iPassword, $iDatabase);
        if ($iConn->connect_errno) {return "Error: " . $iConn->connect_errno;}
	$iConn->query("SET NAMES utf8");
        if (!$iResult = $iConn->query($sql)) {return "Error: " . $iConn->errno;}
        $iConn->close();
        return $iResult;
    }
//    $result = dbquery("SELECT * FROM cds_user");
//    $result = dbquery("SELECT * FROM cds_user WHERE cCol00 = \"zpy1993@gmail.com\" AND cCol01 = \"52c7939243a8258054c9b5f047744149\";");
//    $result =  dbquery("SELECT * FROM cds_patientinfomation;");
//    $result = dbquery("INSERT INTO cds_patientinfomation VALUE (NULL, 2, \"姓名\", \"XIMI\", 0, 30, \"汉族\", 0, \"120000000000000000\", \"职员\", \"+8613000000000\", \"天津市\", \"2018-01-01\", \"天津市\", 0);");
//    var_dump($result);
?>
