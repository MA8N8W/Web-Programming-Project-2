<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
require "db.php";
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':  
        try {
            $stmt = $pdo->query("SELECT * FROM channels");
            $readData=$stmt->fetchAll();
            echo json_encode(['status' => 'Read Success!', "readData"=>$readData]);
        }
        catch(PDOException $e) {
          echo json_encode(['status' => 'Read Error!']);
        }
        break;
    case 'POST':
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $stmt = $pdo->prepare("INSERT INTO channels (frequency, performance, name, transmitter_location, address) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$data['frequency'], $data['performance'], $data['name'], $data['transmitter_location'], $data['address'], $data['id']]);
            echo json_encode(['status' => 'Create success!']);
        }
        catch(PDOException $e) {
          //echo json_encode(['status' => 'Create error!']);
            echo json_encode(['status' => $data]);
        }
        break;
    case 'PUT':
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $stmt = $pdo->prepare("UPDATE channels SET frequency=?, performance=?, name=?, transmitter_location=?, address=? WHERE id=?");
            $stmt->execute([$data['frequency'], $data['performance'], $data['name'], $data['transmitter_location'], $data['address'], $data['id']]);
            echo json_encode(['status' => 'Update success!']);
        }
        catch(PDOException $e) {
          echo json_encode(['status' => 'Update error!']);
        }
        break;
    case 'DELETE':
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $stmt = $pdo->prepare("DELETE FROM channels WHERE id=?");
            $stmt->execute([$data['id']]);
            echo json_encode(['status' => 'Deleted']);
        }
        catch(PDOException $e) {
          echo json_encode(['status' => 'Delete error!']);
        }
        break;
}
