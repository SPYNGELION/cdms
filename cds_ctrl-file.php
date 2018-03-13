<?php
    require("lib/cos-php/cos-autoloader.php");
    function cosuploadfile($iFile) {
        $iRegion = "eu-frankfurt";
        $iAppId = "1251209287";
        $iSecretId = "AKIDkKgolUjFG1XoqeTahZCbmiPs66rNBjZA";
        $iSecretKey = "Ulna9TZQ4TdXCbkqiLitrb8VfbJo6B2g";
        $iBucket = "spyngelion-frankfurt-1251209287";
        $iOptions = array("ACL" => "private");
        try {
            $iCosClient = new Qcloud\Cos\Client(array(
                "region" => $iRegion,
                "credentials" => array(
                    "appId" => $iAppId,
                    "secretId" => $iSecretId,
                    "secretKey" => $iSecretKey)));
            $iCosKey = "/cdms/" . $iFile["name"];
            $iCosClient->upload(
                $bucket = $iBucket,
                $key = $iCosKey,
                $body = fopen($iFile["tmp_name"], "rb"),
                $options = $iOptions);

        } catch (Exception $e) {
            return false;
        }
        return true;
    }
    function coscheckfileexists($iFileName) {
        $iRegion = "eu-frankfurt";
        $iAppId = "1251209287";
        $iSecretId = "AKIDkKgolUjFG1XoqeTahZCbmiPs66rNBjZA";
        $iSecretKey = "Ulna9TZQ4TdXCbkqiLitrb8VfbJo6B2g";
        $iBucket = "spyngelion-frankfurt-1251209287";
        $iCosClient = new Qcloud\Cos\Client(array(
            "region" => $iRegion,
            "credentials" => array(
                "appId" => $iAppId,
                "secretId" => $iSecretId,
                "secretKey" => $iSecretKey)));
        $iCosKey = "cdms/" . $iFileName;
        try {
            $iResult = $iCosClient->getObject(array(
                "Bucket" => $iBucket,
                "Key" => $iCosKey));
        } catch (Exception $e) {
            return false;
        }
        return true;
    }
    function cosdeletefile($iFileName) {
        $iRegion = "eu-frankfurt";
        $iAppId = "1251209287";
        $iSecretId = "AKIDkKgolUjFG1XoqeTahZCbmiPs66rNBjZA";
        $iSecretKey = "Ulna9TZQ4TdXCbkqiLitrb8VfbJo6B2g";
        $iBucket = "spyngelion-frankfurt-1251209287";
        $iCosClient = new Qcloud\Cos\Client(array(
            "region" => $iRegion,
            "credentials" => array(
                "appId" => $iAppId,
                "secretId" => $iSecretId,
                "secretKey" => $iSecretKey)));
        $iCosKey = "cdms/" . $iFileName;
        try {
            $iResult = $iCosClient->deleteObject(array(
                "Bucket" => $iBucket,
                "Key" => $iCosKey));
        } catch (Exception $e) {
            return false;
        }
        return true;
    }
?>
