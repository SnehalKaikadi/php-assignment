<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

include "db.php";

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true);

switch ($method) {
  case 'GET':
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);
    $users = [];
    while ($row = $result->fetch_assoc()) {
      $users[] = $row;
    }
    echo json_encode($users);
    break;

  case 'POST':
    $name = $input['name'];
    $email = $input['email'];
    $password = $input['password'];
    $dob = $input['dob'];

    $stmt = $conn->prepare("INSERT INTO users (name, email, password, dob) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $password, $dob);
    $stmt->execute();
    echo json_encode(["message" => "User added"]);
    break;

  case 'DELETE':
    parse_str(file_get_contents("php://input"), $data);
    $id = $data['id'];

    $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    echo json_encode(["message" => "User deleted"]);
    break;

  default:
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    break;
}
?>
