/**
 * Created by campitos on 6/30/15.
 */
angular.module("miAplicacion",[])
    .controller("primerController",function($scope){
        $scope.mensaje="a/adiagnostico.html";


        $scope.cambiarADiagnostico=function(){
            $scope.mensaje="a/adiagnostico.html";
        }
        $scope.cambiarAModelado=function(){
         $scope.mensaje="a/amodelado.html"
        }

        $scope.cambiarBAplicacion=function(){
            $scope.mensaje="b/baplicacion.html"
        }
        $scope.cambiarBDesarrollo=function(){
            $scope.mensaje="b/bdesarrollo.html";
        }
        $scope.cambiarBDiseno=function(){
            $scope.mensaje="b/bdiseno.html";
        }
        $scope.cambiarBImplantacion=function(){
            $scope.mensaje="b/bimplantacion.html";
        }

    });

