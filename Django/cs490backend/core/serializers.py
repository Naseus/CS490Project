from rest_framework import fields
from rest_framework import serializers
from dj_rest_auth.models import TokenModel


class token_serializer(serializers.ModelSerializer):
    is_super = serializers.SerializerMethodField('get_super_status')

    def get_super_status(self, token):
        rtn = token.user
        return rtn.is_superuser

    class Meta:
        model = TokenModel
        fields = ['key', 'is_super']

