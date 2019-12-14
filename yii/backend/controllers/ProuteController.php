<?php
namespace backend\controllers;

use yii\rest\ActiveController;
use yii\helpers\Json;

class ProuteController extends ActiveController
{
    public $modelClass = 'app\models\User';

    function actionCaca() {
        $array = [
            [
                "id" => 1,
                "name" => "luke"
            ],
            [
                "id" => 2,
                "name" => "erwan"
            ]
        ];
        return $array;
    }
}