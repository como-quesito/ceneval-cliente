/**
 * Created by campitos on 6/30/15.
 */
angular.module("miAplicacion",[])
    .controller("primerController",function($scope){
        $scope.mensaje="adiagnostico.html";
        $scope.libritos="libros.html";

        $scope.cambiarADiagnostico=function(){
            $scope.mensaje="adiagnostico.html";
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
        $scope.cambiarCAdministracion=function(){
            $scope.mensaje="c/cadministracion.html";
        }
        $scope.cambiarCControl=function(){
            $scope.mensaje="c/ccontrol.html";
        }
        $scope.cambiarDGestionBases=function(){
            $scope.mensaje="d/dgestionbases.html";
        }
        $scope.cambiarDGestionRedes=function(){
            $scope.mensaje="d/dgestionredes.html";
        }
        $scope.cambiarDGestionSistemas=function(){
            $scope.mensaje="d/dgestionsistemas.html"
        }
    });

