<!DOCTYPE html>
<html lang="en">

<head>
    <title>Uždavinys22</title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://use.fontawesome.com/6603c9fd94.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style2.css">
</head>

<body>
    <script>
        function change() {
            $('p').html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i><span> Keičiama... </span>');
            $.post('login.php', {
                password1: $('input[name="password1"]').val(),
                password2: $('input[name="password2"]').val()
            }).done(function (resp) {
                if (resp.success) {
                    $('p').html(resp.token);
                } else {
                    $('p').html(resp.error);
                }
            });
        }

    </script>

    <div class="header">
        <h3>Pakeiskite slaptažodį</h3>
    </div>
    <form method="post" action="login.php">
        <div class="input-group">
            <input type="password" class="form-control" name="password1" placeholder="Įveskite naują slaptažodį">
        </div>
        <div class="input-group">
            <input type="password" class="form-control" name="password2" placeholder="Pakartokite slaptažodį">
            <br>
            <br>
        </div>
        <div class="input-group">
            <button type="submit" name="register" class="btn">Keisti</button>
        </div>
    </form>
    <div class="naujas">
        <button class="btn" onclick="change()" style="text-align: center; margin-left: 46.5%; margin-top: 1%;">Ajax</button>
        <p style="color: white; text-align: center; margin-top: 1%; margin-left: -2%;">!</p>
    </div>
</body>

</html>